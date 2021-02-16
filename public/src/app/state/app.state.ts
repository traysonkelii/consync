export interface RootState {
    user?: User;
}

export interface Auth {
    displayName: string;
    id: string;
    user_id: string;
    provider: string,
    name: object,
    emails: [{ value: string }];
    picture: string;
    nickname: string;
    _json: any;
    _raw: any;
}

export interface BusinessData {
    userRoles: string[]
    _id: string;
    companyID: string;
    cusomterID: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
}

export enum Permissions {
    createProject = 'Create Project',
    createUser = 'Create User',
    procoreApi = 'Procore API',
    removeColaborator = 'Remove Colaborator',
    remindAnyone = 'Remind Anyone',
    remindAssignee = 'Remind Assignee',
    viewAllConversations = 'View All Conversations',
}

export enum Roles {
    level1 = 'Level 1',
    level2 = 'Level 2',
    level3 = 'Level 3',
    admin = 'Company Admin',
}

export interface User {
    auth0: Auth;
    data: BusinessData;
    permissions: Permissions[];
}
