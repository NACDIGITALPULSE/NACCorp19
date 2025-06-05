
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CGU = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
            Conditions Générales d'Utilisation
          </h1>
          
          <div className="prose max-w-none dark:prose-invert">
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">1. Objet</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Les présentes conditions générales d'utilisation (CGU) régissent l'utilisation de la plateforme 
                NACCORP, opérée par NAC DIGITAL PULSE, société de droit nigérien, spécialisée dans les services 
                de création et d'accompagnement d'entreprises.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">2. Acceptation des conditions</h2>
              <p className="text-gray-600 dark:text-gray-300">
                L'utilisation de notre plateforme implique l'acceptation pleine et entière des présentes CGU. 
                Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser nos services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">3. Services proposés</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">NACCORP propose les services suivants :</p>
              <ul className="text-gray-600 dark:text-gray-300">
                <li>Création et enregistrement d'entreprises (NIF, RCCM)</li>
                <li>Services de design graphique (logo, charte graphique)</li>
                <li>Création de sites web et supports marketing</li>
                <li>Services comptables et fiscaux</li>
                <li>Accompagnement offshore</li>
                <li>Email professionnel</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">4. Inscription et compte utilisateur</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Pour accéder à certains services, vous devez créer un compte en fournissant des informations 
                exactes et à jour. Vous êtes responsable de :
              </p>
              <ul className="text-gray-600 dark:text-gray-300">
                <li>La confidentialité de vos identifiants</li>
                <li>L'exactitude des informations fournies</li>
                <li>Toute activité effectuée sous votre compte</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">5. Tarifs et paiement</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Les tarifs de nos services sont indiqués en Francs CFA (FCFA) et incluent toutes les taxes applicables. 
                Le paiement doit être effectué selon les modalités convenues.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">6. Obligations de l'utilisateur</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">L'utilisateur s'engage à :</p>
              <ul className="text-gray-600 dark:text-gray-300">
                <li>Utiliser la plateforme conformément à sa destination</li>
                <li>Fournir des documents et informations authentiques</li>
                <li>Respecter la législation en vigueur</li>
                <li>Ne pas porter atteinte au fonctionnement de la plateforme</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">7. Responsabilité</h2>
              <p className="text-gray-600 dark:text-gray-300">
                NACCORP s'engage à fournir ses services avec diligence. Cependant, notre responsabilité 
                est limitée aux services directement fournis. Nous ne saurions être tenus responsables 
                des décisions des autorités administratives ou de tout préjudice indirect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">8. Propriété intellectuelle</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Tous les éléments de la plateforme NACCORP (design, textes, logos, etc.) sont protégés 
                par le droit de la propriété intellectuelle. Toute reproduction non autorisée est interdite.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">9. Résiliation</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Nous nous réservons le droit de suspendre ou résilier l'accès à notre plateforme en cas 
                de violation des présentes CGU ou de tout comportement inapproprié.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">10. Droit applicable et juridiction</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Les présentes CGU sont régies par le droit nigérien. Tout litige sera soumis aux 
                tribunaux compétents du Niger.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">11. Contact</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Pour toute question relative aux présentes CGU, contactez-nous :<br />
                Email : <strong>support@nacentreprise.com</strong><br />
                Téléphone : <strong>+227 98141675</strong>
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CGU;
