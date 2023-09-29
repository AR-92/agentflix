import { supabase } from '$lib/supabaseClient';
import { writable } from 'svelte/store';

function createReviewStore() {
    const { subscribe, set, update } = writable([]);
    return {
        subscribe,
        getAgentReviews: (id, page) => update(async (n) => {
            let ra = 2
            if (page) ra = 100
            let { data: reviews, error } = await supabase
                .from('reviews')
                .select('*')
                .eq('agent_id', id)
                .order('id', { ascending: false })
                .range(0, ra);
            if (!error) {
                if (reviews) {
                    set(reviews)
                } else {
                    set([])
                }
            }

        }),
        getClientReviews: (id, page) => update(async (n) => {
            let ra = 2
            if (page) ra = 100
            let { data: reviews, error } = await supabase
                .from('reviews')
                .select('*')
                .eq('client_id', id)
                .order('id', { ascending: false })
                .range(0, ra);
            if (!error) {
                if (reviews) {
                    set(reviews)
                } else {
                    set([])
                }
            }

        }),
        addReview: (o, t) => update(async (reviews) => {
            const { data, error } = await supabase
                .from('reviews')
                .insert([o])
                .select();
            if (!error) {
                if (data) {
                    const f = {
                        message: 'Review Added !',
                        timeout: 5000
                    };
                    t.trigger(f);
                    const updatedReviews = [...data, ...reviews];
                    set(updatedReviews)
                } else {
                    set([])
                }
            }
        }),
        deleteReview: (o, i, t) => update(async (n) => {
            const { error } = await supabase.from('reviews').delete().eq('id', o.id);
            var filtered = n.filter(function (el) { return el.id != o.id });
            set(filtered)
            const f = {
                message: 'Review Deleted !',
                timeout: 5000
            };
            t.trigger(f);

        }),
        getRattings: async (id) => {
            let { data: reviews, error } = await supabase
                .from('reviews')
                .select('rating')
                .eq('agent_id', id)
            if (review) {
                if (reviews.length > 0) {
                    let totalRating = 0;
                    for (let i = 0; i < reviews.length; i++) {
                        totalRating += reviews[i].rating;
                    }
                    const averageRating = totalRating / reviews.length;
                    await supabase
                        .from('profile')
                        .update({
                            rating: averageRating
                        })
                        .eq('profiles_id', id)
                        .select();
                    console.log('this is test rating upload ', averageRating, id)
                } else {
                    await supabase
                        .from('profile')
                        .update({
                            rating: 0
                        })
                        .eq('profiles_id', id)
                        .select();
                }
            }
        }
    };
}

export const reviewData = createReviewStore();
