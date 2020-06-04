import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonRouterLink } from '@ionic/react';
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum natus a suscipit ipsam fugiat impedit numquam fuga nobis magni quia, delectus expedita molestias, voluptas aut eveniet quas autem. Culpa, natus.</p>
            <IonRouterLink href="/call" routerDirection="forward">Detalhes</IonRouterLink>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
