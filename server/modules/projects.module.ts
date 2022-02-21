import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsController } from 'server/controllers/projects.controller';
import { ProjectMemberController } from 'server/controllers/project.member.controller';
import { Project } from 'server/entities/project.entity';
import { ProjectMember } from 'server/entities/project_member.entity';
import { Task } from 'server/entities/task.entity';
import { ProjectsService } from 'server/providers/services/projects.service';
import { ProjectMemberService } from 'server/providers/services/project.member.service';
import { TasksService } from 'server/providers/services/tasks.service';
import { UsersModule } from './users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Project, Task, ProjectMember]), UsersModule],
  controllers: [ProjectsController, ProjectMemberController],
  providers: [ProjectsService, TasksService, ProjectMemberService],
  exports: [TypeOrmModule],
})
export class ProjectsModule {}
