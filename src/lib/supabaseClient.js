import { createClient } from '@supabase/supabase-js';
const url = 'https://zjhfywemboaxpglmjpaq.supabase.co';
const anon =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqaGZ5d2VtYm9heHBnbG1qcGFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIxOTg3NTksImV4cCI6MjAwNzc3NDc1OX0.Qcz15s5I0rHQ3ipY7LGikpK2sigSZjeHXDv8OkQcR1k';
export const supabase = createClient(url, anon);
