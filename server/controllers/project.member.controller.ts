import { Body, Controller, Post } from '@nestjs/common';
import { ProjectMember } from 'server/entities/project_member.entity';
import { ProjectMemberService } from 'server/providers/services/project.member.service';
import { UsersService } from 'server/providers/services/users.service';

class ProjectMemberBody {
  email: string;
  projectId: number;
}

@Controller()
export class ProjectMemberController {
  constructor(private projectMemberService: ProjectMemberService, private userService: UsersService) {}

  @Post('/members')
  public async create(@Body() body: ProjectMemberBody) {
    let projectMember = new ProjectMember();
    const user = await this.userService.findByEmail(body.email);
    if (user) {
      projectMember.userId = user.id;
      projectMember.projectId = body.projectId;
      projectMember = await this.projectMemberService.createProjectMember(projectMember);
    }
    return { projectMember };
  }
}
