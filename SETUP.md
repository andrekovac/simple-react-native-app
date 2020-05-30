# Setup (Deutsch)

## Voraussetzung für die Erstellung der App

1. [Node.js](https://nodejs.org/en/) installieren.
   Mache dazu das Folgende:

   1. Gehe auf [nodejs.org](https://nodejs.org/de/) und lade die `LTS` version für dein Betriebssystem herunter (nicht die `Aktuell` version)

   2. Stelle sicher, dass der `node` Befehl installiert ist. Dazu öffnest du das **Terminal** (auf Windows: **Eingabeaufforderung**) und gibst folgendes ein:

      ```bash
      node -v && npm -v
      ```

      Wenn du so etwas Ähnliches als Output direkt unter deiner Eingabe bekommst, ist alles gut:

      ```bash
      v10.14.1
      6.14.4
      ```

      Die Zahlen können gerne anders sein, es sollte bloß kein Fehler erscheinen wie `-bash: node: command not found` oder so.

2. Öffne ein Terminal bzw. eine Kommandozeile und führe darin den folgenden Befehl aus:

   ```
   npm install expo-cli --global
   ```

    Falls du Fehler bekommst, beachte bitte die [möglichen Fehler](#mögliche-fehler).

3. Registriere dich bei [Expo](https://expo.io/).

4. Installiere [Visual Studio Code](https://code.visualstudio.com/) auf deinem Rechner.

5. Lade dir die **Expo Client** App für das [iPhone](https://apps.apple.com/us/app/expo-client/id982107779) oder [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US) herunter.

## Fehler, die bei der Installation von `node.js` auftreten können

### `Permission denied` or similar

- Try executing the command with `sudo`, for example `sudo npm install` instead of `npm install`.
- On Mac systems, if you are not the `Admin` user you can't even use `sudo`.

  1. In this case login as your admin user and run `sudo visudo` (or `sudo EDITOR=vi visudo` in case the former throws the error `visudo: specified editor (vscode) doesn't exist`) in the command line.
  2. Duplicate the `%admin ALL=(ALL) ALL` line and replace `%admin` with the username of the standard user your want to five the permissions [as described here](https://apple.stackexchange.com/questions/100703/how-do-i-run-sudo-command-from-standard-account#answer-100704).

### Windows: Mögliche Fehler

Wenn dein Betriebsystem **Windows** ist und du einen der folgenden Fehler siehst:

```bash
/usr/local/lib/node_modules/gatsby-cli/lib/init-starter.js:117 } catch {
^

SyntaxError: Unexpected token {
at createScript (vm.js:80:10)
at Object.runInThisContext (vm.js:139:10)
at Module._compile (module.js:616:28)
at Object.Module._extensions..js (module.js:663:10)
at Module.load (module.js:565:32)
at tryModuleLoad (module.js:505:12)
at Function.Module._load (module.js:497:3)
at Module.require (module.js:596:17)
at require (internal/module.js:11:18)
at Object.<anonymous> (/usr/local/lib/node_modules/gatsby-cli/lib/create-cli.js:28:20)
```

oder

```bash
"C:\Users\MyName\AppData\Roaming\npm\gatsby.ps1" kann nicht geladen werden. Die Datei
"C:\Users\MyName\AppData\Roaming\npm\gatsby.ps1" ist nicht digital signiert. Sie können dieses Skript im aktuellen System nicht
ausführen. Weitere Informationen zum Ausführen von Skripts und Festlegen der Ausführungsrichtlinie erhalten Sie unter
"about_Execution_Policies" (https:/go.microsoft.com/fwlink/?LinkID=135170)..
In Zeile:1 Zeichen:1
+ gatsby develop
+ ~~~~~~
+ CategoryInfo : Sicherheitsfehler: (:) [], PSSecurityException
+ FullyQualifiedErrorId : UnauthorizedAccess
```

dann tue das Folgende:

- Führe `Set-ExecutionPolicy Unrestricted -Scope Process` im Terminal aus und probiere dann das Kommando, welches die Fehler verursacht hat nochmals.

[Hier findest du mehr Informationen zu dieser Lösung](https://winaero.com/blog/change-powershell-execution-policy-windows-10/).
