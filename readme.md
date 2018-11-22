# 21.11.2018 - Reactive Programming VS React Framework

_Reactive Programming_ ist ein _Programmierparadigma_ bei dem auf Änderungen durch Inputs etc... reagiert werden soll.

Bei heutigen Applikationen hält man einen globalen State - Ein gemeinsames Model von dem aus mehreren Applikationsebenen zugreifen kann.

Beispiel: 04 Typescript/TSIntro/src/rxjs.ts

RxJS Seite ansehen! - Auch YouTube ist eine gute Quelle.

## Components

_User Controls_ oder _User Interface_

## Observable Pattern

Hier steigen wir in das _Observable_ Pattern ein. Durch eine _Subscription_ kann ein Observer die Datenänderungen von einem _Observable_ empfangen.

RxJS - reactive for JavaScript

Alle Operatoren die man auf Arrays anwenden kann können auch mit Observables auch genützt werden, man braucht dazu nur die RxJS Implementierungen, da es sich um asynchronen _stream_ Operationen handelt.

## SPA - Single Page Application

Werden clientseitig ausgeführt, nur eine Seite. Man navigiert nicht von Page zu Page sondern bleibt technisch gesehen auf der gleichen Seite.

```html
<div><application> Hier werden Inhalte neu geladen </application></div>
```

### Unterliegende Technologie von Push Nachrichten - Web Socket

SignalA: Möglichkeit sich an einem Server zu subscriben um Änderungen mitzubekommen.

# Angular

MVC Pattern
Sobald ich ein größeres -Projekt angehe brauche ich einen State, das bedeutet ein Model. Components sind eher für Steuerung und View zuständig.

Mittels Router kann man mehrere Seiten in eine SPA einbauen und ansteuern.

## Angular cli

Siehe https://cli.angular.io

ng generate erstellt _Artefakte_ das bedeutet Module, Komponenten, etc...

ng generate component NavBar --dry-run
Simuliere das Erstellen einee Komponente
The "dryRun" flag means no changes were made.

ng generate component shared/navnar
Erstellt eine Komponente unter dem Ordner app/shared

ShadowDOM wird von Angular genutzt Bsp.: Component specific css files.

https://github.com/angular/angular-cli/wiki/generate

IOC Container
injectables müssen nicht mehr in das app.module definiert werden weil
@Injectable({
providedIn: "root"
})

Injectables sind SingletonPatterns mit Potential zu package spezifischen Singletons.

Service Pattern sollte man sich angewöhnen.

Angular Structured Directives Bsp.: \*ngFor

Praktische Extension für VSCode AngularLanguageService

API Dokumentation Empfehlung: https://angular.io/api/

Angular basiert auf Modulen, wenn ich ein Modul das nicht teil des Cores ist hinzufügen möchte muss ich das in aoo.modules.ts registrieren.
´´´
// ggf. muss das Modul mit npm install installiert werden
import { HttpModule } from "@angular/http";

@NgModule[{
...
...
imports: [HttpModule]
...
...
}]
´´´

Bei einem Observable - solange niemand subscribed wird die Funktion nicht ausgeführt.

## Angular Elements

Aus jedem Angular Projekt kann als Element in eine andere Webanwendung integriert werden.

# React

## Immutable

Hält sich sehr streng an das Immutable Konzept, Objekte werden nicht im originalen verändert sondern als Kopie zurückgegeben.

## Pure Functions

Keine Referenzen
Baut die DOM komplett zusammen, js und html vermischt

{} expression Brackets

{item.name} interpolation

Jede Komponente hat _State_ und _Prop_, die Props kommen von der Parent Component State ist der Zustand der Komponente.

_State_ Bsp.: Checkbox/ToggleButton der Komponente\
_Props_ sind eher Daten

Beispiel einer Komponente:

```typescript
export default class Skills extends React.Component<SkillProps, SkillState>
```

SkillProps kommt von der Parent Komponente, SkillState gehört der Klasse

React ist stark auf Bindings angewiesen, wenn ich ein Feld nicht binde kann ich später keine Werte oder Funktionen daran hängen

Wenn ein Property mit `this.setState({skills:{...}});` überschrieben wird, so wird nur das angegebene Objekt überschrieben, nicht das komplette. In unserem Beispel skills, vergleiche `javascript Object.assign()`

# Vue

Ist laut Trainer zwischen Angular und React. Eigenheiten sind z.B. dass Komponenten ihre Kindkomponenten registrieren muss.

# Webcomponents

Es gibt einige Webcomponent Frameworks mit der Komponenten erstellt werden können. Beispiel https://ionicframework.com/ _Ionic_ ist ein Hybridframework auf _Angular Basis_ - Eher ein Webform Engine alles weitere sollte über _CORDOVA_ implementiert werden. Mit diesem Framework kann man auch in den Webstore Deployen. Gegenstück dazu ist React Native.

Die modernere Variante für Mobile Development _Native Script_

Such mal nach nodeJS und raspberry pi

# Extensions

## VS Live Share

Hier kann man mit einem anderen Entwickler live Code bearbeiten
Tip des Trainers

# Mediaqueries

Im Kontext mit _Responsive Designs_ benutzt men Mediaqueries um die App an die aktuelle Auflösung anzupassen.
Tip des Trainers: VS-Code Extension _Peek-CSS_

Als _Holy Grail_ bezeichnet man das weitverbreitete Header - LeftNav - Main - RightNav - Footer Konzept

_Mobile First_ ist ein Konzept bei dem die Entwicklung der mobilen Devices im Vordergrund steht, die Versionen für größere Systeme funktionieren dann meistens analog.

# Bootstrap

http://getbootstrap.com/

http://getbootstrap.com/docs/4.1/layout/grid/

Ist ein typisches UI Framework, sie vereinfachen das Aufbereiten des Inhalts für den Benutzer.

Große Errungenschaft _Grid Layout_

Mobile Breakpoints mit .col-xs-_ und .col-md-_ für Monitore

Fast jeder größere Hersteller hat ein Grid-System

Office UI Fabric ist das Boorstrap von Microsoft

Das Gridsystem wird von etwas (besserem?) ersetzt und zwar Flexbox. Es sorgt dafür, dass sich ein Container wie ein Container verhält.
Wenn ich rein mit Flexbox formatiere habe ich viel weniger DIVs als mit Bootstrap. Mit Flexbox ist das 1 Container weniger. Bootstrap 4 verwendet Flexbox aber sie brauchen immer noch das alte Containersystem.

[Bootstrap Docs](https://getbootstrap.com/docs/)

Ein guter Visueller Guide:\
https://css-tricks.com/snippets/css/a-guide-to-flexbox/

Tipp des Trainers: css-tricks.com ist eine gute Ressource

Mit diesen beiden Links kann man ein responsive design anlegen.
Beispiel für diese Technologien ist das Projekt 06 UI\HolyGrail

Bei Bootstrap muss ich keine Größe für das Gridsystem angeben col col-6 ist weitaus flexibler als das alte Gridsystem.
Bootstrap ist mehr als ein Gridsystem, es hat auch sehr viele Controls. Laut Trainer hat es mehr Features als _Material Design_

# Flex

[Flex Playground](https://demos.scotch.io/visual-guide-to-css3-flexbox-flexbox-playground/demos/)

[Angular Flex]() https://github.com/angular/flex-layout)

Achtung, Flex unterstützt keine Mediaqueries

# SASS

[Synthetically Awsome Style Sheets](https://sass-lang.com/guide)

Sass hat sich gegenüber scss durchgesetzt weil es dem normalen css näher steht.

Verwendung von relativen Größenangaben ist guter Ton in SASS, vh - view heigt, vw - view width, em wird im Schriftsatz zur Bestimmung der Zeichenbreite in Abhängigkeit von der Schriftgröße verwendet, rem ist relativ zum aktuellen Kontainer.

SCSS braucht einen Preprocessor.

# Nestings

Man schreibt Klassen ineinander anstatt nebeneinander

```css
nav {
  ul {
    width: 15px;
    ...;
  }
}

nav ul {
  width: 15px;
  ...;
}
```

#

```ts
export class SkillsService {
  client: httpClient;
  arrSkills: Skill[] = [];
  Skills: BehaviorSubject<Skill[] | []>;
  /* Ein BehaviourObject stellt die Daten an mehreren Orten zur Verfügung ist eine spezielle Form des Observables 
  BehaviourSubject informiert Subscruber über den letzten Datenstand */

  constructor() {
    this.client = new httpClient();
    this.Skills = new BehaviorSubject(this.arrSkills);
    this.client.getObservable<Skill[]>("skills.json").subscribe(data => {
      this.arrSkills = data;
      this.Skills.next(this.arrSkills);
      /* mit next broadcastet der Observable die neuen Daten an den Observer
      Mit next bekomme ich die neuen Daten */
    });
  }

  addSkill(s: Skill) {
    this.arrSkills.push(s);
    this.Skills.next(this.arrSkills);
  }
}
```

# Progressive Web App

https://developers.google.com/web/ilt/pwa/
Further Reading: https://console.firebase.google.com

Beispiel: 07 Real Time - PWA\smartSammlerPWA

Anwendungen die im Browser geladen werden kann, im Idealfall kann sie mit Einschränkungen auch offline genutzt werden.

Unterstützt durch Vue.js, Angular, React und Ionic

Progressive Web app ist ein Webstandard. Durch ein paar Handgriffe kann eine bestehende App in eine Progressive Web App umgewandelt werden.

Lighthouse ist eine Platform mit der das Rating einer PWA erstellt werden. Auch Google Chrome kann dieses Rating oder Score erstellen -> Tab Audits.

Muss einen Service Worker registrieren, das kann nur über HTTPS gemacht werden.

### Let's Encrypt

Automaitsiertes Erstellen eines _Let's Encrypt_ Zertifikats. Link folgt noch...

[Portproxy für Dev Test](https://ngrok.com/)

## Portierung in eine PWA

```bash
 ng add @angular/pwa
```

Verwandelt ein Angular Projekt in ein PWA Projekt.

manifest.json - Wie soll sich der Installer verhalten
ngsw-config.json - Verhalten des _Service Workers_

### Anmerkung des Trainers die Anordnung eines Projektes nach Typ (service...) ist nicht zu empfehlen.
