import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'server/entities/task.entity.ts';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  findAllForProject(projectId: number): Promise<Task[]> {
    return this.taskRepository.find({
      where: { projectId },
    });
  }

  createProject(task: Task): Promise<Task> {
    return this.taskRepository.save(task);
  }

  findtaskById(id: number) {
    return this.taskRepository.findOne(id);
  }

  removetask(task: Task) {
    this.taskRepository.delete(task);
  }
}
