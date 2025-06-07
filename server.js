const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Definindo as campanhas e dicas
const campaigns = {
  "Prevenção a Incêndios Florestais": [
    "Evite jogar bitucas de cigarro nas áreas de risco.",
    "Mantenha áreas ao redor de sua casa limpas e livres de folhas secas.",
    "Evite fazer queimadas em dias de vento."
  ],
  "Prevenção a Enchentes": [
    "Evite jogar lixo nas ruas e bueiros para prevenir entupimentos.",
    "Mantenha sua casa longe de áreas ribeirinhas.",
    "Fique atento às previsões do tempo e prepare-se com antecedência."
  ],
  "Preparação para Terremotos": [
    "Anexe móveis pesados à parede para evitar que caiam.",
    "Mantenha um kit de emergência acessível.",
    "Saiba o caminho para a área de segurança mais próxima."
  ],
  "Alerta de Tempestades": [
    "Fique em locais fechados e longe de vidros durante tempestades.",
    "Desconecte equipamentos elétricos para evitar danos.",
    "Mantenha lanternas e pilhas extras em mãos."
  ],
  "Conscientização sobre Ondas de Calor": [
    "Beba muita água e evite exposição direta ao sol.",
    "Use roupas leves e proteja-se com chapéus e protetor solar.",
    "Evite atividades físicas ao ar livre durante os horários de pico do calor."
  ]
};

// Endpoint para obter as dicas da campanha
app.get('/api/campaign/:campaignName', (req, res) => {
  const { campaignName } = req.params;
  const tips = campaigns[campaignName];

  if (tips) {
    res.json({ tips });
  } else {
    res.status(404).json({ message: 'Campanha não encontrada.' });
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
