// supabase.js - Conexão Direta com o Supabase
const { createClient } = require("@supabase/supabase-js");

// 1. Cole a sua URL do Supabase dentro das aspas abaixo:
const supabaseUrl = "https://mehdvmjgcrjdkwwdjvjp.supabase.co";

// 2. Cole a sua SUPABASE_PUBLISHABLE_KEY (anon) dentro das aspas abaixo:
const supabaseKey = "sb_publishable_kfxiQO_9QqNQ3A0KLkN-rA_zUSOeUgy";

// Inicializa o cliente do Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
