import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItemSliding, IonIcon, IonLabel, IonItem, IonItemOptions, IonItemOption } from '@ionic/react';
import { personOutline, eye, eyeOffOutline } from 'ionicons/icons';
import { useStudents, Presence } from '../hooks/student.hook';

const Call: React.FC = () => {
    const [students, setStudents] = useStudents();
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Chamada de Presença</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    {students.map((student) => {
                        return (
                            <IonItemSliding key={student.id}>
                                <IonItem>
                                    <IonIcon slot="start" icon={personOutline}></IonIcon>
                                    <IonLabel>{student.firstName} {student.lastName}</IonLabel>
                                    {
                                        student.status === Presence.Present &&
                                        <IonIcon slot="end" icon={eye}></IonIcon>
                                    }
                                    {
                                        student.status === Presence.Absent &&
                                        <IonIcon slot="end" icon={eyeOffOutline}></IonIcon>
                                    }
                                </IonItem>
                                <IonItemOptions side="end">
                                    <IonItemOption color="danger">Remover</IonItemOption>
                                </IonItemOptions>
                            </IonItemSliding>
                        )
                    })}
                </IonList>
            </IonContent>
        </IonPage>
    )
}

export default Call;