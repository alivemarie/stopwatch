import React from "react";
import "./index.css";
import {interval, fromEvent} from "rxjs";
import { buffer, debounceTime, map, filter } from "rxjs/operators";


const stream$ = interval(1000 /* ms */ );

const digital = document.getElementById('timer');
let active = false;
let time = 0; // 1/10 seconds

stream$.subscribe(
    x => {
        if(!active) return;
        time++;
        digital.innerHTML = Math.floor(time / 3600) + ":" + Math.floor((time / 60)) + ":" + (time % 60);
    });

let clicks$ = fromEvent(document.getElementById('wait'), 'click')

const buff$ = clicks$.pipe(
    debounceTime(300),
)

const click$ = clicks$.pipe(
    buffer(buff$),
    map(list => {
        return list.length;
    }),
    filter(x => x === 2),
)

click$.subscribe(() => {
    active = false;
})

fromEvent(document.getElementById('start'), 'click')
    .subscribe(e => {
        active = true;
    });

fromEvent(document.getElementById('stop'), 'click')
    .subscribe(e => {
        active = false;
        time = 0;
        digital.innerHTML = "0:0:00";
    });

fromEvent(document.getElementById('reset'), 'click')
    .subscribe(e => {
        active = false;
        time = 0;
        digital.innerHTML = "0:0:00";
    });
