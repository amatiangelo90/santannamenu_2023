import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { ProjectComponent } from 'app/modules/admin/dashboards/project/project.component';
import { ProjectService } from 'app/modules/admin/dashboards/project/project.service';
import {ProductControllerService} from "./api/productController.service";

export default [
    {
        path     : '',
        component: ProjectComponent,
        resolve  : {
            data: () => inject(ProjectService).getData(),
            product: () => inject(ProductControllerService).retrieveAllUsingGET1(),

        },
    },
] as Routes;
