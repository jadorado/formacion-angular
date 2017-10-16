export class Group {
  id: number;
  name: string;
  genre: string;
  members: { name: string }[];

  get membersList(): string { return this.members.map(member => member.name).join(', '); }

  constructor(member: any = {}) {
    this.id = member.id;
    this.name = member.name;
    this.genre = member.genre;
    this.members = member.members;
  }
}
