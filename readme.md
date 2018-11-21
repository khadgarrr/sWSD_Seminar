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

Angular structured Directives Bsp.: \*ngFor

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
