import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component'
import { StatisticsComponent } from './statistics/statistics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardFinalComponent } from './dashboard-final/dashboard-final.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectLevelsComponent } from './project-levels/project-levels.component';
import { ProcurementComponent } from './procurement/procurement.component';
import { IncidentComponent } from './incident/incident.component';
import { PiComponent } from './pi/pi.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      {
        path: 'dashboard', component: DashboardComponent,
        children: [
          {
            path: 'home-dashoard', component: DashboardFinalComponent
          }
        ]
      },
      { path: 'alert', component: DashboardComponent }
    ]
  },
  {
    path: 'statistics', component: StatisticsComponent,
    data: {
      breadcrumb: [
        {
          label: 'Statistics',
          url: ''
        }
      ]
    },
    children: [
      {
        path: 'procurement', component: ProcurementComponent,
        data: {
          breadcrumb: [
            {
              label: 'Statistics',
              url: ''
            },
            {
              label: 'Procurement',
              url: '/statistics/procurement'
            }
          ]
        },
        children: [
          {
            path: 'pi', component: PiComponent,
            data: {
              breadcrumb: [
                {
                  label: 'Statistics',
                  url: ''
                },
                {
                  label: 'Procurement',
                  url: '/statistics/procurement'
                },
                {
                  label: 'Performance Indicator',
                  url: '/statistics/procurement/pi'
                }
              ]
            },
            children: [
              {
                path: 'incident', component: IncidentComponent,
                data: {
                  breadcrumb: [
                    {
                      label: 'Statistics',
                      url: ''
                    },
                    {
                      label: 'Procurement',
                      url: '/statistics/procurement'
                    },
                    {
                      label: 'Performance Indicator',
                      url: '/statistics/procurement/pi'
                    },
                    {
                      label: 'Incident',
                      url: '/statistics/procurement/pi/incident'
                    }
                  ]
                },
              }
            ]
          },
          {
            path: 'research', component: ProjectLevelsComponent,
            data: {
              breadcrumb: [
                {
                  label: 'Statistics',
                  url: '/statistics'
                },
                {
                  label: 'Procurement',
                  url: '/statistics/procurement'
                },
                {
                  label: 'Research',
                  url: '/statistics/procurement/research'
                }
              ]
            }
          }
        ]
      },
      {
        path: 'projects', component: ProjectsComponent,
        data: {
          breadcrumb: [
            {
              label: 'statistics',
              url: '/statistics'
            },
            {
              label: 'projects',
              url: '/statistics/projects'
            }
          ]
        },
        children: [
          {
            path: 'projects-levels', component: ProjectLevelsComponent,
            data: {
              breadcrumb: [
                {
                  label: 'statistics',
                  url: '/statistics'
                },
                {
                  label: 'projects',
                  url: '/statistics/projects'
                },
                {
                  label: 'projects-levels',
                  url: '/statistics/projects/projects-levels'
                }
              ]
            }
          }
        ]
      }
    ]
  },
  { path: '', redirectTo: '/statistics', pathMatch: 'full' }
  // { path: '**', component: HomeComponent }
];
// const routes: Routes = [
//   {
//     displayName: 'AngularMix',
//     iconName: 'close',
//     children: [
//       {
//         displayName: 'Speakers',
//         iconName: 'group',
//         children: [
//           {
//             // displayName: 'Michael Prentice',
//             iconName: 'person',
//             route: 'michael-prentice',
//             children: [
//               {
//                 // displayName: 'Delight your Organization',
//                 // iconName: 'star_rate',
//                 // route: 'material-design'
//               }]
//           }]
//         }]
//       }]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
