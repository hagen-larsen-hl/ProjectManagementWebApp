import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectMember } from 'server/entities/project_member.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectMemberService {
  constructor(
    @InjectRepository(ProjectMember)
    private projectMemberRepository: Repository<ProjectMember>,
  ) {}

  findAllForUser(email: string): Promise<ProjectMember[]> {
    return this.projectMemberRepository.find({
      where: { email },
    });
  }

  findAllForUserId(userId: number): Promise<ProjectMember[]> {
    return this.projectMemberRepository.find({
      where: { userId },
    });
  }

  createProjectMember(projectMember: ProjectMember): Promise<ProjectMember> {
    return this.projectMemberRepository.save(projectMember);
  }
}
