import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from 'server/entities/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  findAllForUser(leaderId: number): Promise<Project[]> {
    return this.projectRepository.find({
      where: { leaderId },
    });
  }

  createProject(project: Project): Promise<Project> {
    return this.projectRepository.save(project);
  }

  findProjectById(id: number) {
    return this.projectRepository.findOne(id);
  }

  removeProject(project: Project) {
    this.projectRepository.delete(project);
  }
}
