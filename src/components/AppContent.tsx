import { IonButton, IonContent } from "@ionic/react";
import "./AppContent.css";

export interface ContentBackButtonProps {
  text: string;
  link: string;
}

interface AppContentProps {
  content: any;
  backButton?: ContentBackButtonProps;
}

const AppContent: React.FC<AppContentProps> = ({ content, backButton }) => {
  return (
    <IonContent>
      <section className="main-content">
        <section className="content">
          {backButton && (
            <>
              <IonButton fill="outline" routerLink={backButton.link}>
                {backButton.text}
              </IonButton>
            </>
          )}
          <section className="content-area">{content}</section>
        </section>
      </section>
    </IonContent>
  );
};

export default AppContent;
