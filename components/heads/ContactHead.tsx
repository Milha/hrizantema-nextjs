import Head from "next/head";

type QandAItem = {
  question: string;
  answer: string;
};

type ContactHeadProps = {
  qandasProps: QandAItem[];
};

function ContactHead({ qandasProps }: ContactHeadProps) {
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

      {/* REL CANNONICAL */}
      <link rel="canonical" href="https://hrizantema.rs/main-pages/contact" />
    </Head>
  );
}

export default ContactHead;
