import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      events: [
        {
          id: "e1",
          title: "Untold Festival",
          description:
            "Untold is a festival where a bunch of cool people gather up and rup their slapi on dnb music",
          image:
            "https://media.resources.festicket.com/www/photos/3694-artwork.jpg",
        },
        {
          id: "e2",
          title: "Electric Castle",
          description:
            "All I know about this festival is that they had a camping area and a phone that you could call god with",
          image: "https://electriccastle.ro/assets/img/meta/4.jpg",
        },
        {
          id: "e3",
          title: "Ansamblul Folcloric Dumbraveni",
          description:
            "Just a concert that I think would be interesting to exist",
          image: "https://electriccastle.ro/assets/img/meta/4.jpg",
        },
        {
          id: "e4",
          title: "Concert Pepe si Horia Brenciu",
          description: "I just miss their music. Nice guys",
          image: "https://electriccastle.ro/assets/img/meta/4.jpg",
        },
      ],
    };
  },
  mutations: {
    addEvent(state, eventData) {
      const newEvent = {
        id: new Date().toISOString(),
        title: eventData.title,
        image: eventData.image,
        description: eventData.description,
      };

      state.events.unshift(newEvent);
    },
  },
  actions: {
    addEvent(context, eventData) {
      context.commit("addEvent", eventData);
    },
  },
  getters: {
    events: (state) => {
      return state.events;
    },

    event: (state) => (eventId) => {
      return state.events.find((event) => event.id === eventId);
    },
  },
});

export default store;
