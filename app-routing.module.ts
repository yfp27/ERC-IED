import { MemberEntryFormComponent } from './member-entry-form/member-entry-form.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChairmanInfoComponent } from './chairman-info/chairman-info.component';
import { CommitteeComponent } from './committee/committee.component';
import { CommonComponent } from './common-components/common/common.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { ContentComponent } from './content/content.component';
import { CotactInfoComponent } from './cotact-info/cotact-info.component';
import { CustomerInformationComponent } from './customer-information/customer-information.component';
import { FooterComponent } from './footer/footer.component';
import { GeneralMemberComponent } from './general-member/general-member.component';
import { LoginComponent } from './login/login.component';
import { NewsEventsComponent } from './news-events/news-events.component';
import { NoticeComponent } from './notice/notice.component';
import { OurProductComponent } from './our-product/our-product.component';
import { PageInformationComponent } from './page-information/page-information.component';
import { RecivableMemberListComponent } from './recivable-member-list/recivable-member-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { StartupComponent } from './startup/startup.component';


const routes: Routes = [
  { path: '', component: StartupComponent },
  { path: 'content', component: ContentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'recivableMemberList', component: RecivableMemberListComponent },
  { path: 'pageInformation', component: PageInformationComponent },
  { path: 'generalMember', component: GeneralMemberComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'notice', component: NoticeComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'chairmanInfo', component: ChairmanInfoComponent },
  { path: 'compInfo', component: CompanyInfoComponent },
  { path: 'contentInfo', component: ContentComponent },
  { path: 'our-product', component: OurProductComponent },
  { path: 'contactInfo', component: CotactInfoComponent },
  { path: 'customerInfo', component: CustomerInformationComponent },
  { path: 'committee', component: CommitteeComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'member-entry-form', component: MemberEntryFormComponent },
  { path: 'newsEvents', component: NewsEventsComponent },
  { path: 'common', component: CommonComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
