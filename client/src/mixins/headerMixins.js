import _ from 'lodash';

export default {
  computed: {
    headers() {
      const user = _.head(this.users);
      const keys = _.orderBy(_.keys(_.omit(user, ['id', 'updatedAt'])));
      return _.map(keys, header => ({
        text: _.startCase(header),
        align: 'start',
        sortable: true,
        value: header
      }));
    }
  }
};
