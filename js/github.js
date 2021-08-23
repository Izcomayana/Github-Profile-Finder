class Github {
  constructor() {
    this.client_id = '613bc99b7481742db045';
    this.client_secret = 'f8c9d28389b7395a1b49105909c77160b9c4f388';
    this.repos_count = 5;
    this.repos_sort = 'created asc';
  }


  async getUser(user) {
    const profileResponse = await fetch (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    

    const repoResponse = await fetch (`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}