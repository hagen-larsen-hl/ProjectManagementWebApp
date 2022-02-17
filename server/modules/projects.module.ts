import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsController } from 'server/controllers/projects.controller';
import { Project } from 'server/entities/project.entity';
import { ProjectMember } from 'server/entities/project_member.entity';
import { Task } from 'server/entities/task.entity';
import { ProjectsService } from 'server/providers/services/projects.service';
import { TasksService } from 'server/providers/services/tasks.service';

@Module({
  imports: [TypeOrmModule.forFeature([Project, Task, ProjectMember])],
  controllers: [ProjectsController],
  providers: [ProjectsService, TasksService],
  exports: [TypeOrmModule],
})
export class ProjectsModule {}
