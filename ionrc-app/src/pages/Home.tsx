import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonRouterLink, IonButtons, IonMenuButton } from '@ionic/react';
import React from 'react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Início</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <img src="assets/img/classroom.jpg" alt="Class Room" />
          <IonCardHeader>
            <IonCardSubtitle>Chamada de presença</IonCardSubtitle>
            <IonCardTitle>Escola BLIV</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Aplicativo ilustrativo de comos seria uma lista de chamadas. Claro que o ideial seria ter uma gravação dos dias em outro menu como recurso, mas isso fica pra próxima.</p>
            <IonRouterLink href="/call" routerDirection="forward">Realizar chamada</IonRouterLink>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
