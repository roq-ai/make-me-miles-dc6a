import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { loyaltyProgramManagerValidationSchema } from 'validationSchema/loyalty-program-managers';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.loyalty_program_manager
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getLoyaltyProgramManagerById();
    case 'PUT':
      return updateLoyaltyProgramManagerById();
    case 'DELETE':
      return deleteLoyaltyProgramManagerById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getLoyaltyProgramManagerById() {
    const data = await prisma.loyalty_program_manager.findFirst(
      convertQueryToPrismaUtil(req.query, 'loyalty_program_manager'),
    );
    return res.status(200).json(data);
  }

  async function updateLoyaltyProgramManagerById() {
    await loyaltyProgramManagerValidationSchema.validate(req.body);
    const data = await prisma.loyalty_program_manager.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteLoyaltyProgramManagerById() {
    const data = await prisma.loyalty_program_manager.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
