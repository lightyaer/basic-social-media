export default {
  computed: {
    headers() {
      return [
        {
          text: 'Id',
          align: 'start',
          sortable: true,
          value: 'id'
        },
        {
          text: 'Avatar',
          align: 'start',
          sortable: false,
          value: 'avatar'
        },
        {
          text: 'First Name',
          align: 'start',
          sortable: true,
          value: 'firstName'
        },
        {
          text: 'Last Name',
          align: 'start',
          sortable: true,
          value: 'lastName'
        },
        {
          text: 'Username',
          align: 'start',
          sortable: true,
          value: 'username'
        },
        {
          text: 'Created At',
          align: 'start',
          sortable: true,
          value: 'createdAt'
        }
      ];
    }
  }
};
