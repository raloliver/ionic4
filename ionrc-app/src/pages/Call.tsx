import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItemSliding, IonIcon, IonLabel, IonItem, IonItemOptions, IonItemOption, IonActionSheet, IonButtons, IonButton, IonAlert } from '@ionic/react';
import { personOutline, eye, eyeOffOutline, trash, close, ellipsisHorizontalOutline, chevronForwardOutline } from 'ionicons/icons';
import { useStudents, Presence, Student } from '../hooks/student.hook';
import './Call.css';

const Call: React.FC = () => {
    const initialStudent: Student = { id: 0, firstName: "", lastName: "" };

    const [selectedStudent, setSelectedStudent] = useState(initialStudent);
    const [students, setStudents] = useStudents();
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);

    const deleteStudent = (student: Student) => {
        setStudents(students.filter(res => res.id !== student.id));
    }

    const clickStudent = (student: Student) => {
        setSelectedStudent(student);
    }

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
                                <IonItemOptions side="start">
                                    <IonItemOption color="danger">Ausente</IonItemOption>
                                </IonItemOptions>
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
                                    <IonButtons slot="end">
                                        <IonButton onClick={() => clickStudent(student)}>
                                            <IonIcon slot="icon-only" icon={ellipsisHorizontalOutline}></IonIcon>
                                        </IonButton>
                                        <IonButton>
                                            <IonIcon slot="icon-only" icon={chevronForwardOutline}></IonIcon>
                                        </IonButton>
                                    </IonButtons>
                                </IonItem>
                                <IonItemOptions side="end">
                                    <IonItemOption>Presente</IonItemOption>
                                </IonItemOptions>
                            </IonItemSliding>
                        )
                    })}
                </IonList>
                <IonActionSheet
                    isOpen={!!selectedStudent.id}
                    header={`${selectedStudent.firstName} ${selectedStudent.lastName}`}
                    onDidDismiss={() => setSelectedStudent(initialStudent)}
                    buttons={[{
                        text: 'Remover',
                        role: 'destructive',
                        icon: trash,
                        handler: () => { setShowDeleteAlert(true); }
                    }, {
                        text: 'Presente',
                        icon: eye,
                        handler: () => { selectedStudent.status = Presence.Present; }
                    }, {
                        text: 'Ausente',
                        icon: eyeOffOutline,
                        handler: () => { selectedStudent.status = Presence.Absent; }
                    },
                    {
                        text: 'Cancelar',
                        icon: close,
                        role: 'cancel'
                    }]}
                />
                <IonAlert
                    cssClass='alert-student-remove'
                    isOpen={showDeleteAlert}
                    onDidDismiss={() => setShowDeleteAlert(false)}
                    header="Excluir este aluno?"
                    message="Ao excluir não terá como desfazer esta ação."
                    subHeader={`${selectedStudent.firstName} ${selectedStudent.lastName}`}
                    buttons={[
                        {
                            text: 'Excluir',
                            role: 'destructive',
                            cssClass: 'danger',
                            handler: () => { deleteStudent(selectedStudent); }
                        }, {
                            text: 'Cancelar',
                            role: 'cancel',
                            cssClass: 'muted',
                            handler: () => {
                                console.log('Cancelou a exclusão');
                            }
                        }
                    ]} />
            </IonContent>
        </IonPage>
    )
}

export default Call;