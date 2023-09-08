import { supabase } from '$lib/supabaseClient';
import { writable } from 'svelte/store';

function createReviewStore() {
    const { subscribe, set, update } = writable([]);
    return {
        subscribe,
        getAgentReviews: (id) => update(async (n) => {
            let { data: reviews, error } = await supabase
                .from('reviews')
                .select('*')
                .eq('agent_id', id)
                .order('id', { ascending: false })
                .range(0, 2);
            if (!error) {
                if (reviews) {
                    set(reviews)
                } else {
                    set([])
                }
            }

        }),
        getClientReviews: (id) => update(async (n) => {
            let { data: reviews, error } = await supabase
                .from('reviews')
                .select('*')
                .eq('client_id', id)
                .order('id', { ascending: false })
                .range(0, 2);
            if (!error) {
                if (reviews) {
                    set(reviews)
                } else {
                    set([])
                }
            }

        }),
        addReview: (o) => update(async (reviews) => {
            const { data, error } = await supabase
                .from('reviews')
                .insert([o])
                .select();
            if (!error) {
                if (data) {
                    const updatedReviews = [...data, ...reviews];
                    set(updatedReviews)
                } else {
                    set([])
                }
            }
        }),
        deleteReview: (o, i) => update(async (n) => {
            const { error } = await supabase.from('reviews').delete().eq('id', o.id);
        }),
    };
}

export const reviewData = createReviewStore();
