import { NgModule } from '@angular/core';

import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule, MatNativeDateModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule } from '@angular/material';


@NgModule({

    exports: [
        MatSelectModule,
        MatTableModule,
        MatInputModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatRadioModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatMenuModule,
        MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule
    ]
})

export class AppMaterialModule {

}