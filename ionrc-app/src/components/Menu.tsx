import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonMenuToggle, IonLabel, IonIcon, IonItem } from "@ionic/react";
import { home, people } from "ionicons/icons";

export interface AppPage {
    title: string,
    url: string,
    icon: string
}

const appPages: AppPage[] = [
    {
        title: 'Início',
        url: '/home',
        icon: home
    },
    {
        title: 'Chamada',
        url: '/call',
        icon: people
    }
]

const Menu: React.FC = () => {
    return (
        <IonMenu contentId="main" side="start" type="overlay">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    {appPages.map((page, key) => {
                        return (
                            <IonMenuToggle key={key} autoHide={false}>
                                <IonItem routerLink={page.url} routerDirection="root">
                                    <IonIcon slot="start" icon={page.icon} />
                                    <IonLabel>{page.title}</IonLabel>
                                </IonItem>
                            </IonMenuToggle>
                        )
                    })}
                </IonList>
            </IonContent>
        </IonMenu>
    )
}

export default Menu;