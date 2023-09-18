import { supabase } from '$lib/supabaseClient';
import { writable } from 'svelte/store';

function createEventStore() {
    const { subscribe, set, update } = writable([]);
    return {
        subscribe,
        getAgentEvents: (id, page) => update(async (n) => {
            let ra = 2
            if (page) ra = 100
            let { data: events, error } = await supabase
                .from('events')
                .select('event_id,location(location),date,time,name,description,address')
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
            if (page) ra = 100
            let { data: events, error } = await supabase
                .from('events')
                .select('*')
                .eq('client_id', id)
                .order('id', { ascending: false })
                .range(0, ra);
            if (!error) {
                if (events) {
                    set(events)
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
                        mesage: 'Event Added !',
                        timeout: 10000
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
                    mesage: 'Event Deleted !',
                    timeout: 10000
                });
            }
        }),
    };
}

export const eventsData = createEventStore();
