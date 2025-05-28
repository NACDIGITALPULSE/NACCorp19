
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Combien de temps faut-il pour obtenir mon NIF et RCCM ?",
      answer: "En moyenne, il faut 48 à 72 heures pour traiter votre demande complète. Ce délai peut varier selon la complexité de votre dossier et la réactivité des administrations."
    },
    {
      question: "Quels documents dois-je fournir ?",
      answer: "Vous devrez fournir une pièce d'identité valide, un justificatif de domicile, les statuts de votre entreprise (si applicable), et tout document spécifique selon le type d'entreprise que vous souhaitez créer."
    },
    {
      question: "Vos services graphiques sont-ils inclus dans le forfait ?",
      answer: "Les services graphiques (logo, charte graphique) sont optionnels et proposés en complément des démarches administratives. Vous pouvez les ajouter lors de votre inscription."
    },
    {
      question: "Que se passe-t-il si ma demande est refusée ?",
      answer: "Dans le rare cas d'un refus, nous analysons les raisons avec vous et vous aidons à corriger votre dossier. Si le refus est dû à une erreur de notre part, nous vous remboursons intégralement."
    },
    {
      question: "Puis-je suivre l'avancement de ma demande ?",
      answer: "Oui, vous recevez des notifications par email et SMS à chaque étape du processus. Vous pouvez également vous connecter à votre espace personnel pour suivre l'avancement en temps réel."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Questions{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-niger-orange to-niger-green">
              fréquentes
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Trouvez rapidement les réponses à vos questions les plus courantes.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-200">
              <CardHeader 
                className="cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <CardTitle className="flex items-center justify-between text-lg">
                  <span>{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-niger-orange" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-niger-orange" />
                  )}
                </CardTitle>
              </CardHeader>
              {openIndex === index && (
                <CardContent className="pt-0">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
