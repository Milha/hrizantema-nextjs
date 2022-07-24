import Head from "next/head";

function ContactHead({ qandasProps }) {
  // console.log(qandasProps, "Form ContactHead");

  const eleMap = qandasProps.map((inj, i) => ({
    "@type": "Question",
    name: inj.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: inj.answer,
    },
  }));

  const schemaDataQandAs = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: "Cesto postavljana pitanja",
    mainEntity: eleMap,
  };
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaDataQandAs) }}
      />
    </Head>
  );
}

export default ContactHead;
