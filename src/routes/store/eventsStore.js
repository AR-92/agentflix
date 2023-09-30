import { supabase } from '$lib/supabaseClient';
import { writable } from 'svelte/store';
function transformArray(inputArray) {
    const transformedArray = inputArray.map(item => {
      const { id, client_id, event_id, status, ...rest } = item;
      const { name, description, address, time, date, agent_id,location } = event_id;
      
      return {
        id,
        client_id,
        name,
        description,
        address,
        time,
        date,
        agent_id,
        status,
        location,
        list:true
      };
    });
  
    return transformedArray;
  }
function createEventStore() {
    const { subscribe, set, update } = writable([]);
    return {
        subscribe,
        getAgentEvents: (id, page) => update(async (n) => {
            let ra = 2
            if (page) ra = 100
            let { data: events, error } = await supabase
                .from('events')
                .select('event_id,location(location),date,time,name,description,address,agent_id')
                .eq('agent_id', id)
                .order('event_id', { ascending: false })
                .range(0, ra);
            if (!error) {
                if (events) {
                    set(events)
                    console.log('events', events)
                } else {
                    set([])
                }
            }
        }),
        getClientEvents: (id, page) => update(async (n) => {
            let ra = 2
            if (page) ra = 100;
            let { data: events, error } = await supabase
                .from('event_list')
                .select('id,agent_id,client_id,event_id,status,event_id(name,description,address,time,date,agent_id,location(location))')
                .eq('client_id', id)
                .order('created_at', { ascending: false })
                .range(0, ra);
                console.log("yours events",events,transformArray(events),id)
            if (!error) {
                if (events) {
                    set(transformArray(events))
                } else {
                    set([])
                }
            }
        }),
        addEvent: (o, t) => update(async (events) => {
            const { data, error } = await supabase
                .from('events')
                .insert([o])
                .select();
            if (!error) {
                if (data) {
                    const f = {
                        message: 'Event Added !',
                        timeout: 5000
                    };
                    t.trigger(f);
                    const updatedEvents = [...data, ...events];
                    set(updatedEvents)
                } else {
                    set([])
                }
            }
        }),
        deleteEvent: (o, t) => update(async (n) => {
            const { error } = await supabase.from('events').delete().eq('event_id', o.event_id);
            if (!error) {
                var filtered = n.filter(function (el) { return el.event_id != o.event_id });
                set(filtered)
                t.trigger({
                    message: 'Event Deleted !',
                    timeout: 5000
                });
            }
        }),
        deleteListEvent: (o, t) => update(async (n) => {
            const { error } = await supabase.from('event_list').delete().eq('id', o.id);
            if (!error) {
                var filtered = n.filter(function (el) { return el.id != o.id });
                set(filtered)
                t.trigger({
                    message: 'Event Deleted !',
                    timeout: 5000
                });
            }
        }),
        addtoEventList: async (event_id, agent_id, client_id, status, t) => {
            console.log('event_id', event_id, "agent_id", agent_id, "client_id", client_id, status)
            const { data, error } = await supabase
                .from('event_list')
                .insert([{
                    event_id: event_id,
                    agent_id: agent_id,
                    client_id: client_id,
                    status: status
                }])
                .select();
                console.log(data,error);
            if (!error) {
                t.trigger({
                    message: 'Event Added To Your List !',
                    timeout: 5000
                });
            }
        },
    };
}

export const eventsData = createEventStore();
