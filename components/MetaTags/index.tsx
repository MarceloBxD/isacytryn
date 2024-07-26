import Head from "next/head";

const MetaTags = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#AE8F72" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Isa Cytryn" />
      <link rel="shortcut icon" href="/src/app/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <meta name="description" content="" />
      <meta
        name="keywords"
        content="Psicóloga Isabela Cytryn, Atendimento psicológico, Terapia online, Psicoterapia individual, Tratamento para ansiedade, Tratamento para depressão, Terapia cognitivo-comportamental, Consultas psicológicas, Psicoterapia para adultos, Terapia para estresse, Psicóloga especializada em transtornos de humor, Apoio emocional, Psicóloga em [cidade/região específica], Psicoterapia para autoconhecimento, Psicóloga de confiança, Consulta psicológica online, Terapia para autoestima, Suporte psicológico, Psicoterapia presencial e online, Atendimento psicológico humanizado"
      />

      {/* OPEN GRAPH */}
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Isa Cytryn" />
      <meta property="og:description" content="" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://isacytryn.vercel.app/" />
      <meta
        property="og:image"
        content="https://isacytryn.vercel.app/sharing_img.png"
      />
      <meta property="og:site_name" content="Psicóloga - Isabela Cytryn" />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter SEO */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Isabela Cytryn" />
      <meta name="twitter:description" content="" />
      <meta
        name="twitter:image"
        content="https://viert.com/assets/brand/logo.png"
      />

      {/* AUTHOR SEO */}
      <meta name="author" content="Marcelo Bracet" />
      <link rel="author" href="https://bracetdev.vercel.app/" />
      <meta name="application-name" content="Isabela Cytryn" />
    </Head>
  );
};

export default MetaTags;
