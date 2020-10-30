import * as vscode from 'vscode';
import { XMLHttpRequest } from 'xmlhttprequest-ts';



var path = require("path");

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('vt.verify', (uri:vscode.Uri) => {
    var p = uri.path;
    var terminal = vscode.window.createTerminal({name:"RADON Verification Tool", shellPath:"bash", shellArgs:["-c", "curl -s 0.0.0.0:5000/front_end | node - " + p]});
    terminal.show();
	});

	let disposable_correct = vscode.commands.registerCommand('vt.correct', (uri:vscode.Uri) => {
    var p = uri.path;
    var terminal = vscode.window.createTerminal({name:"RADON Verification Tool", shellPath:"bash", shellArgs:["-c", "curl -s 0.0.0.0:5000/front_end_correct | node - " + p]});
    terminal.show();
	});

	let disposable_learn = vscode.commands.registerCommand('vt.learn', (uri:vscode.Uri) => {
    var p = uri.path;
    var terminal = vscode.window.createTerminal({name:"RADON Verification Tool", shellPath:"bash", shellArgs:["-c", "curl -s 0.0.0.0:5000/front_end_learn | node - " + p]});
    terminal.show();
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(disposable_correct);
	context.subscriptions.push(disposable_learn);
}

export function deactivate() {}
