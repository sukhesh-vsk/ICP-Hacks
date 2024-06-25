import Array "mo:base/Array";

actor {
  stable var projects: [Project] = [];

  type Project = {
    id: Nat;
    title: Text;
    description: Text;
    teamMembers: Text;
    projectUrl: Text;
    file: ?Blob;
    likes: Nat;
  };

  public query func getProjects(): async [Project] {
    return projects;
  };

  public func submitProject(
    title: Text,
    description: Text,
    teamMembers: Text,
    projectUrl: Text,
    file: ?Blob
  ): async Nat {
    let id = projects.size();
    projects := Array.tabulate(id + 1, func(i: Nat): Project {
      if (i == id) {
        return {
          id = id;
          title = title;
          description = description;
          teamMembers = teamMembers;
          projectUrl = projectUrl;
          file = file;
          likes = 0;
        };
      } else {
        return projects[i];
      }
    });
    return id;
  };

  public func likeProject(id: Nat): async Bool {
    let initialSize = projects.size();
    projects := Array.tabulate(
      initialSize,
      func(i: Nat): Project {
        if (projects[i].id == id) {
          return {
            id = projects[i].id;
            title = projects[i].title;
            description = projects[i].description;
            teamMembers = projects[i].teamMembers;
            projectUrl = projects[i].projectUrl;
            file = projects[i].file;
            likes = projects[i].likes + 1;
          };
        } else {
          return projects[i];
        };
      },
    );

    return initialSize != projects.size();
  };
};