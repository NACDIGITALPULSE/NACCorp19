
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
            Politique de Confidentialité
          </h1>
          
          <div className="prose max-w-none dark:prose-invert">
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">1. Introduction</h2>
              <p className="text-gray-600 dark:text-gray-300">
                NACCORP, opéré par NAC DIGITAL PULSE, s'engage à protéger votre vie privée et vos données personnelles. 
                Cette politique explique comment nous collectons, utilisons et protégeons vos informations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">2. Informations collectées</h2>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">2.1 Données personnelles</h3>
              <ul className="text-gray-600 dark:text-gray-300 mb-4">
                <li>Nom, prénoms et informations de contact</li>
                <li>Adresse email et numéro de téléphone</li>
                <li>Informations d'entreprise et documents administratifs</li>
                <li>Données de facturation et de paiement</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-2 dark:text-white">2.2 Données techniques</h3>
              <ul className="text-gray-600 dark:text-gray-300">
                <li>Adresse IP et informations de navigation</li>
                <li>Cookies et technologies similaires</li>
                <li>Logs de connexion et d'utilisation</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">3. Utilisation des données</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Nous utilisons vos données pour :</p>
              <ul className="text-gray-600 dark:text-gray-300">
                <li>Fournir nos services de création d'entreprise</li>
                <li>Traiter vos demandes administratives</li>
                <li>Communiquer avec vous sur nos services</li>
                <li>Améliorer notre plateforme et nos services</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">4. Partage des données</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Nous ne vendons jamais vos données personnelles. Nous pouvons partager vos informations avec :
              </p>
              <ul className="text-gray-600 dark:text-gray-300">
                <li>Les autorités administratives dans le cadre de vos demandes</li>
                <li>Nos prestataires de services (sous accord de confidentialité)</li>
                <li>Les autorités légales si requis par la loi</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">5. Sécurité des données</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger 
                vos données contre l'accès non autorisé, la perte ou la destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">6. Vos droits</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Vous disposez des droits suivants :</p>
              <ul className="text-gray-600 dark:text-gray-300">
                <li>Droit d'accès à vos données personnelles</li>
                <li>Droit de rectification des données inexactes</li>
                <li>Droit d'effacement sous certaines conditions</li>
                <li>Droit de portabilité de vos données</li>
                <li>Droit d'opposition au traitement</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">7. Conservation des données</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Nous conservons vos données personnelles uniquement le temps nécessaire aux finalités 
                pour lesquelles elles ont été collectées, conformément aux obligations légales applicables.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">8. Contact</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Pour toute question concernant cette politique ou pour exercer vos droits, 
                contactez-nous à : <strong>support@nacentreprise.com</strong> ou au <strong>+227 98141675</strong>
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;
