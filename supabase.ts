import { createClient } from '@supabase/supabase-js';


// Initialize Supabase client
// Using direct values from project configuration
const supabaseUrl = 'https://vlljavdgteoqvqkmdzvw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsbGphdmRndGVvcXZxa21kenZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1NTc5ODEsImV4cCI6MjA2MjEzMzk4MX0.7VmpSORicVkXQyZYA3B6FL3Js778AaojKGaol5Ha9Ww';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };