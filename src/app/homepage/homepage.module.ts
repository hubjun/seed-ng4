import {NgModule} from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {HomepageComponent} from "./homepage.component";
import {HomepageRoutingModule} from "./homepage-routing.module";
import {HomepageService} from "./homepage.service";
import { HomepageShareComponent } from './homepage-share/homepage-share.component';
import { HomepageEventsComponent } from './homepage-events/homepage-events.component';
import { HomepageFansComponent } from './homepage-fans/homepage-fans.component';
import { HomepageServiceComponent } from './homepage-service/homepage-service.component';
import { MyPictureComponent } from './my-picture/my-picture.component';
import { MyVideoComponent } from './my-video/my-video.component';
import { MyFansComponent } from './my-fans/my-fans.component';
import { MyCareFansComponent } from './my-care-fans/my-care-fans.component';
import {MemberModule} from "./member-module/member-module.component";
import { EventsDetailComponent } from './homepage-events/events-detail/events-detail.component';
import { EventsDetailDetailComponent } from './homepage-events/events-detail-detail/events-detail-detail.component';
import { EventsDetailRuleComponent } from './homepage-events/events-detail-rule/events-detail-rule.component';
import { EventsDetailAnnounceComponent } from './homepage-events/events-detail-announce/events-detail-announce.component';

@NgModule({
  imports: [
    SharedModule,
    HomepageRoutingModule
  ],
  declarations: [
    HomepageComponent,
    HomepageShareComponent,
    HomepageEventsComponent,
    HomepageFansComponent,
    HomepageServiceComponent,
    MyPictureComponent,
    MyVideoComponent,
    MyFansComponent,
    MyCareFansComponent,
    MemberModule,
    EventsDetailComponent,
    EventsDetailDetailComponent,
    EventsDetailRuleComponent,
    EventsDetailAnnounceComponent
  ],
  providers:[HomepageService]
})
export class HomepageModule {
}
