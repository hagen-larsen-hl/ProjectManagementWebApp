import { Body, Controller, Delete, Get, HttpException, Param, Post } from "@nestjs/common";
import { JwtBody } from "server/decorators/jwt_body.decorator";
import { JwtBodyDto } from "server/dto/jwt_body.dto";
import { Project } from "server/entities/project.entity";
import { ProjectMember } from "server/entities/project_member.entity";
import { Task } from "server/entities/task.entity";
import { ProjectsService } from "server/providers/services/projects.service";

class ProjectBody {
    name: string;
    projectMembers: ProjectMember[];
    tasks: Task[];
}

@Controller()
export class ProjectsController {
    constructor(
        private projectsService: ProjectsService,

    ) {}

    @Get('/projects')
    public async index(@JwtBody() jwtBody: JwtBodyDto){
        const projects = await this.projectsService.findAllForUser(jwtBody.userId);
        return projects;
    }

    @Post('/projects')
    public async create(@JwtBody() jwtBody: JwtBodyDto, @Body() body: ProjectBody) {
        let project = new Project();
        project.leaderId = jwtBody.userId;
        project.name = body.name;
        project = await this.projectsService.createProject(project);
        return { project };
    }

    @Delete('/projects/:id')
    public async destroy(@Param('id') id: string, @JwtBody() jwtBody: JwtBodyDto) {
        const project = await this.projectsService.findProjectById(parseInt(id, 10));
        if (project.leaderId !== jwtBody.userId) {
            throw new HttpException('Unauthorized', 401);
        }

        this.projectsService.removeProject(project);

        return{ success: true };
    }
}