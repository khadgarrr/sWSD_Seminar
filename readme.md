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
