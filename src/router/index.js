import { createRouter, createWebHistory } from "@ionic/vue-router";
import EvenitsPage from "@/components/pages/EventsPage.vue";
import EventDetailsPage from "@/components/pages/EventDetailsPage.vue";
import AddEventPage from "@/components/pages/AddEventPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/events",
  },
  {
    path: "/events",
    component: EvenitsPage,
  },
  {
    path: "/events/details/:id",
    component: EventDetailsPage,
  },
  {
    path: "/events/add",
    component: AddEventPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
