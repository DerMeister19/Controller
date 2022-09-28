import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonPage, IonRow } from '@ionic/react';
import './Home.css';
import { caretBack, caretDown, caretForward, caretUp, closeOutline } from 'ionicons/icons';
import axios from 'axios';

const Home: React.FC = () => {

  const actions = async (action: number) => {

    try {
      const body = {
        action: action
      }

      const request = await axios.post('http://localhost:3000/action', body);

      console.log(request);
      



    } catch(e) {
      console.log(e);
    }

  }




  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid className='controller'>
          <IonRow>
            <IonCol>
              
            </IonCol>
            <IonCol>
              <IonButton onClick={() => actions(1)}>
                <IonIcon icon={caretUp} slot="icon-only"></IonIcon>
              </IonButton>              
            </IonCol>
            <IonCol>

            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton onClick={() => actions(2)}>
                <IonIcon icon={caretBack} slot="icon-only"></IonIcon>
              </IonButton>              
            </IonCol>
            <IonCol>
              <IonButton onClick={() => actions(5)}>
                <IonIcon icon={closeOutline} slot="icon-only"></IonIcon>
              </IonButton>              
            </IonCol>
            <IonCol>
              <IonButton onClick={() => actions(3)}>
                <IonIcon icon={caretForward} slot="icon-only"></IonIcon>
              </IonButton>              
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>

            </IonCol>
            <IonCol>
              <IonButton onClick={() => actions(4)}>
                <IonIcon icon={caretDown} slot="icon-only"></IonIcon>
              </IonButton>              
            </IonCol>
            <IonCol>

            </IonCol>

          </IonRow>
        </IonGrid>


      </IonContent>
    </IonPage>
  );
};

export default Home;
