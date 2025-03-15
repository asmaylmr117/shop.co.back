const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://xfuggyswtwfqvtpnwtjz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmdWdneXN3dHdmcXZ0cG53dGp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4MDUzODUsImV4cCI6MjA1NzM4MTM4NX0.LWU2YUnYuHnzvLXJYRAyaZHOR2vDk3-WD3RbToWvniM'
);

module.exports = supabase;
