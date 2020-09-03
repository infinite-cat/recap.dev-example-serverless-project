import { postsService } from '../../service/posts.service'

export const handler = request => postsService.getById(request.id)
