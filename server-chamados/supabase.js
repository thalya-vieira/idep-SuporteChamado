// supabase.js - Conexão Direta com o Supabase
const { createClient } = require("@supabase/supabase-js");

//le as chaves do arquivo .env de forma segura
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

// Inicializa o cliente do Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
