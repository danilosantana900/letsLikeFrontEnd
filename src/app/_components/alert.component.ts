import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';

import { Alert, AlertType } from '@app/_models';
import { AlertService } from '@app/_services';

@Component({ selector: 'alert', templateUrl: 'alert.component.html' })
export class AlertComponent implements OnInit, OnDestroy {
    @Input() idUser = 'default-alert';
    @Input() fade = true;

    alerts: Alert[] = [];
    alertSubscription: Subscription;
    routeSubscription: Subscription;

    constructor(private router: Router, private alertService: AlertService) { }

    ngOnInit() {
       this.alertSubscription = this.alertService.onAlert(this.idUser)
            .subscribe(alert => {
                if (!alert.message) {
                    this.alerts = this.alerts.filter(x => x.keepAfterRouteChange);
                }
                this.alerts.forEach(x => delete x.keepAfterRouteChange);
                return;
            })
    }

    ngOnDestroy() {
        
    }

    removeAlert(alert: Alert) {
        
    }

    cssClass(alert: Alert) {
        
    }
}