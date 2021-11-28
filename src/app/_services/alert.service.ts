import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Alert, AlertType } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class AlertService {
    private subject = new Subject<Alert>();
    private defaultId = 'default-alert';

    // enable subscribing to alerts observable
    onAlert(id = this.defaultId): Observable<Alert> {
        return ;
    }

    // convenience methods
    success(message: string, options?: any) {
        
    }

    error(message: string, options?: any) {
        
    }

    info(message: string, options?: any) {
        
    }

    warn(message: string, options?: any) {
        
    }

    // Metédo responsável por disparar o Alerta   
    alert(alert: Alert) {
       
    }

    // clear alerts
    clear(id = this.defaultId) {
        
    }
}