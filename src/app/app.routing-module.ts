import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstCpmComponent } from "./first-cpm/first-cpm.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { HeroListComponent } from "./hero-list/hero-list.component";
import { HomeComponent } from "./home/home.component"
import {LoginComponent } from "./login/login.component";

const routes : Routes = [
    {
        path:'hero-detail',
        component: HeroDetailComponent
    },
    {
        path :'hero-detail/:id', component: HeroDetailComponent
    },
    {
        path:'first-cmp', component : FirstCpmComponent
    },
    {
        path:'hero-list', component: HeroListComponent
    },
    {
        path:'', component: HomeComponent
    },
    {
        path:'login', component: LoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}